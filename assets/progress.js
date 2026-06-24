/* Local progress tracking for the AI Engineer Roadmap.
 *
 * Records which lessons you've worked through in the browser's localStorage
 * (your own local system cache — nothing is uploaded). On a lesson page it
 * watches the quiz progress bar and marks the lesson complete once every
 * question has been answered. On the curriculum / landing pages it reads that
 * record back and renders your progress.
 *
 * A lesson counts as "completed" when all of its quizzes have been answered
 * (right or wrong) — i.e. attempted to the end, not necessarily aced.
 */
(function () {
  var KEY = "aieng-progress";

  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY) || "{}");
    } catch (e) {
      return {};
    }
  }
  function save(o) {
    try {
      localStorage.setItem(KEY, JSON.stringify(o));
    } catch (e) {}
  }
  function lessonIdFrom(str) {
    var m = (str || "").match(/(\d{4})-/);
    return m ? m[1] : null;
  }

  // --- Lesson page: watch the quiz progress bar -----------------------------
  var bar = document.getElementById("progress");
  var lessonId = lessonIdFrom(location.pathname);
  if (bar && lessonId) {
    function showBadge() {
      if (document.getElementById("aieng-done-badge")) return;
      var b = document.createElement("div");
      b.id = "aieng-done-badge";
      b.textContent = "✓ Completed";
      b.style.cssText =
        "position:fixed;top:12px;right:12px;z-index:9999;background:#0d2b1a;" +
        "color:#22c55e;border:1px solid #22c55e;border-radius:6px;" +
        "padding:.35rem .65rem;font:600 .72rem/1 -apple-system,BlinkMacSystemFont," +
        "'Segoe UI',system-ui,sans-serif;letter-spacing:.05em";
      document.body.appendChild(b);
    }
    function markComplete() {
      var s = load();
      if (!(s[lessonId] && s[lessonId].completed)) {
        s[lessonId] = { completed: true, at: new Date().toISOString() };
        save(s);
      }
      showBadge();
    }
    function check() {
      var w = parseFloat((bar.style.width || "0").replace("%", ""));
      if (w >= 99.5) markComplete();
    }
    var store = load();
    if (store[lessonId] && store[lessonId].completed) showBadge();
    new MutationObserver(check).observe(bar, {
      attributes: true,
      attributeFilter: ["style"],
    });
    check();
    return;
  }

  // --- Curriculum / landing pages: render saved progress --------------------
  var store = load();
  var rows = document.querySelectorAll(".row");
  var total = 0,
    done = 0;

  rows.forEach(function (r) {
    var a = r.querySelector("a[href]");
    var id = a && lessonIdFrom(a.getAttribute("href"));
    if (!id) return;
    total++;
    var dot = document.createElement("span");
    dot.className = "pstatus";
    if (store[id] && store[id].completed) {
      dot.classList.add("on");
      dot.textContent = "✓";
      r.classList.add("completed");
      done++;
    }
    r.insertBefore(dot, r.firstChild);
  });

  // If there are no .row lessons on this page (e.g. the landing page), fall
  // back to counting completed entries in storage against the known total.
  if (total === 0) {
    var counts = Object.keys(store).filter(function (k) {
      return store[k] && store[k].completed;
    });
    done = counts.length;
    var totalEl = document.querySelector("[data-lesson-total]");
    total = totalEl ? parseInt(totalEl.getAttribute("data-lesson-total"), 10) : 30;
  }

  var fill = document.getElementById("aieng-meter-fill");
  var label = document.getElementById("aieng-meter-label");
  if (fill) fill.style.width = (total ? (done / total) * 100 : 0) + "%";
  if (label) {
    label.textContent =
      done === 0
        ? "No lessons completed yet — open one to start tracking."
        : done + " of " + total + " lessons completed";
  }

  var reset = document.getElementById("aieng-reset");
  if (reset) {
    reset.addEventListener("click", function (e) {
      e.preventDefault();
      if (confirm("Reset your local lesson progress? This only affects this browser.")) {
        try {
          localStorage.removeItem(KEY);
        } catch (e) {}
        location.reload();
      }
    });
  }
})();
