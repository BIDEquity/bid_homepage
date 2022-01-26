// This file is for executing JavaScript code immediately before the head element is closed.
// Here you can, for example, connect your site to remote services such as booking.com, segment.io, etc.
// Don't forget to whitelist the URLs in the CSP at public/_headersCsp.json.

// Google Analytics and Intercom are already taken care of by the app, so there's no need to add them here.
// Leadfeeder tracker
(function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; (function(d,s){ fs=d.getElementsByTagName(s)[0]; function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; fs.parentNode.insertBefore(cs,fs); }; ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); })(document,'script'); })('4lZPGEjXoN3gLpBk');

// Leadinfo tracker
(function(l,e,a,d,i,n,f,o){if(!l[i]){l.GlobalLeadinfoNamespace=l.GlobalLeadinfoNamespace||[];
l.GlobalLeadinfoNamespace.push(i);l[i]=function(){(l[i].q=l[i].q||[]).push(arguments)};l[i].t=l[i].t||n;
l[i].q=l[i].q||[];o=e.createElement(a);f=e.getElementsByTagName(a)[0];o.async=1;o.src=d;f.parentNode.insertBefore(o,f);}
}(window,document,"script","https://cdn.leadinfo.net/ping.js","leadinfo","LI-61DFFD60EFD8D"));
