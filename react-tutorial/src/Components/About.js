import React from 'react'

export default function About() {
    return (
        <div id="whole">
            <div id="profileimage-name">
                <img src="https://github.com/ItsMeSkink/HostingForBlogSite/blob/master/Blog_Images/Profile%20Image.png?raw=true" alt="" id="profileimage" />
                <h1>Lakshya Pratap Monga</h1>
            </div>

            <div id="navigationdefault-socials-aboutcontent-spotify">

                <div id="navigationdefault-socials">
                    <div id="navigationdefault">
                        <i className="material-icons">home</i>
                        <i className="material-icons">article</i>
                        <i className="material-icons">tips_and_updates</i>
                        <i className="material-icons">build</i>
                        <i className="material-icons">people</i>
                        <i className="material-icons">info</i>
                    </div>

                    <div id="socials">
                        <img src="https://github.com/ItsMeSkink/HostingForBlogSite/blob/master/Blog_Images/Instagram.png?raw=true" alt="" id="Instagram" />
                        <img src="https://github.com/ItsMeSkink/HostingForBlogSite/blob/master/Blog_Images/Twitter.png?raw=true" alt="" id="Twitter" />
                    </div>
                </div>

                <div id="aboutcontent">
                    Hello World, this is Lakshya here, just a combination of approximately 7 x 10<sup>27</sup> atoms. If you stick here most of the topics here would talk about Physics, World Development, the Education System and some which are changing the world. I propogate through the space-time continum believing that we all have the ability to change the world along with the people in it. Along with this belief, I also believe that within the next 2 decades, we would be an interplanetary species and would successfully have humans land on Mars.

                    To know more except what is written in this blog, tune in at "<a href="https://open.spotify.com/show/3m880Lk4YKalgFzFonQFaV" target="_blank" >The Knoate Podcast</a>" which stands for Knowledge + Innovation.
                    <br />
                    <br />

                    If you want to make your own blog like this, you can make one by clicking on the "<b> &#60;&#47;&#62; </b>" button on the left of this.
                    Some of the other people who have created one can be seen by clicking on the "<img src="/Blog_Images/Friends.png" alt="" id="friendsicon" height="30px" style={{ paddingTop: '5px' }} />" icon on left or on the bottom navigation button.
                </div>

                <img src="https://github.com/ItsMeSkink/HostingForBlogSite/blob/master/Blog_Images/ListenOnSpotify_BlackBG.png?raw=true" alt="" id="spotify" onclick="location: 'https://open.spotify.com/show/3m880Lk4YKalgFzFonQFaV'" />

            </div>
        </div>
    )
}
