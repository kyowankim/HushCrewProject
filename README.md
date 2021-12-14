# HushCrewProject

The Hush Website can be accessed through: https://hushcrew.netlify.app/

The Client Side is hosted on Netlify and is built utilizing React Framework with React Hooks and Router in conjunction with various API's such as SwiperJS for the carousel, React Player for the Youtube Videos and multiple components from MaterialUI. It displays the latest Youtube releases from Hush Crew Channel in real time, Collaborations and a Features carousel which displays the teams recognition as a KPOP Dance Cover Team. All media images are hosted seperately on Cloudinary's CDN to reduce the website size and in turn provide better performance for the user.


The Server side was built utilizing NodeJS (Axios, NodeCache, CORS and express). The backend pulls from Youtube's API V3 Database of the latest uploads and associated thumbnails to send to the client to display. It utilizes NodeCache to Cache the results pulled from the API due to it's rate limit restriction and posts them in a seperate endpoint using express for the client side to pull infinitely from with no restrictions. The backend repository is held private due to security reasons.


