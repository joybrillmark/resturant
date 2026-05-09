function updateDateTime() {
  var el = document.getElementById('datetime-display');
  if (!el) return;
  el.textContent = new Date().toLocaleString('en-US', {
    weekday: 'short', year: 'numeric', month: 'short',
    day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
}

setInterval(updateDateTime, 1000);
document.addEventListener('DOMContentLoaded', updateDateTime);

function changeQty(delta) {
  var input = document.getElementById('qty');
  if (!input) return;
  var val = parseInt(input.value) + delta;
  if (val < 1) val = 1;
  input.value = val;
}

document.addEventListener('DOMContentLoaded', function () {
  var resForm = document.getElementById('reservation-form');
  if (resForm) {
    resForm.addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('sum-name').textContent   = document.getElementById('res-name').value;
      document.getElementById('sum-date').textContent   = document.getElementById('res-date').value;
      document.getElementById('sum-time').textContent   = document.getElementById('res-time').value;
      document.getElementById('sum-guests').textContent = document.getElementById('res-guests').value;
      new bootstrap.Modal(document.getElementById('confirmModal')).show();
    });
  }

  var loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      new bootstrap.Modal(document.getElementById('loginModal')).show();
    });
  }

  var nlForm = document.getElementById('newsletter-form');
  if (nlForm) {
    nlForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for subscribing!');
      nlForm.reset();
    });
  }
});
