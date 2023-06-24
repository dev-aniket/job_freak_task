function showContent(contentName) {
    var contentDiv = document.getElementById('content');
    var panelItems = document.getElementsByClassName('panel-item');

    for (var i = 0; i < panelItems.length; i++) {
      panelItems[i].classList.remove('active');
    }

    switch (contentName) {
      case 'home':
        contentDiv.innerHTML = '<h2>Home</h2><p>This is the home content.</p>';
        break;
      case 'contact':
        contentDiv.innerHTML = '<h2>Contact</h2><p>This is the contact information.</p>';
        break;
      case 'information':
        contentDiv.innerHTML = '<h2>Information</h2><p>This is some information.</p>';
        break;
      case 'guide':
        contentDiv.innerHTML = '<h2>Guide</h2><p>This is a guide.</p>';
        break;
    }

    event.target.classList.add('active');
  }