const checkOnlineStatus = () => {
    const statusBar = document.querySelector('.status');
    const content = document.querySelector('.on');
    const content1 = document.querySelector('.on1');
    if (navigator.onLine) {
        if (!statusBar.classList.contains('online')) {
            statusBar.classList.add('online');
            content.innerHTML = "Your are online: ";
            content1.innerHTML = "Now you can access internet";
          
        }
        
    } else {    
        if (statusBar.classList.contains('online')) {
            statusBar.classList.remove('online');
            content.innerHTML = "Your are offline: ";
            content1.innerHTML = "you can't access internet";
        }
    }
    setTimeout(checkOnlineStatus, 2000);
}
checkOnlineStatus();