# Spotify clone

This project is Spotify clone coding by using React JS, Redux, Firebase and spotify API.

# 1. Login page

When the user click the button login with spotify, the page will be redirected to the spotify login page. User can enter his/her real spotify account to login in.

![loginpage](https://user-images.githubusercontent.com/21342802/97827450-56ae5280-1c92-11eb-8ac7-9d3f5ca286e5.png)

# 2. Home page

I made custom home page which shows the user's playlist images, and I gave hover effect on each playlists. When the user hover on each images, it will show the name of the playlist in the speech bubble.

![homepage](https://user-images.githubusercontent.com/21342802/97827659-e6540100-1c92-11eb-9753-6d6f6611134d.png)

# 3. Playlist

If the user click the playlist in the sidebar, the website will be redirected to the designated playlist page with the unique id.

![playlist1](https://user-images.githubusercontent.com/21342802/97827861-74c88280-1c93-11eb-8494-d8dae97fce72.png)

![playlist2](https://user-images.githubusercontent.com/21342802/97827886-84e06200-1c93-11eb-8aa5-64b402460fcb.png)

![playlist3](https://user-images.githubusercontent.com/21342802/97827927-9aee2280-1c93-11eb-9149-9d71c5d60ca6.png)

![playlist4](https://user-images.githubusercontent.com/21342802/97827949-aa6d6b80-1c93-11eb-9726-96058e83a4cc.png)

# 4. Playing Music

In the playlist page, if the user click the song, the audio player will receive the information of the music(preview version), and the user can listen to the song by clicking the play button in the player.

![player](https://user-images.githubusercontent.com/21342802/97828057-fddfb980-1c93-11eb-93e8-1664464cd1eb.png)

# 5. Redux

When I created the project, I used the command `npx create-react-app my-app --template redux`, so that I could use the template of redux. It was very convenient to use redux template because I just needed to set the value of slice, and some functions for dispatching.

# 6. Spotify API

I used spotfiy API to get information of musics from the actual spotify account. <br />

`spotify.setAccessToken(_token)`: This function helps me to get a token when I logged in with my spotify account. <br />
`spotify.getMe()`: This function is for getting user information. <br />
`spotify.getUserPlaylists()`: By using this function, I could get playlists of my account. <br />

For more information, visit https://developer.spotify.com/

# 7. Firebase deploy

By using firebase, I could deploy the application very easily. <br />

`firebase init`: Initiate the deployment. User can choose the options and directory. <br />
`npm run build`: Build the project. <br />
`firebase deploy`: Deployment. User can get a hosting url and project console url. <br />

## Project link

Below link is the address of my project which is deployed. Make sure that you have an actual spotify account and playlists in your account.

https://spotify-clone-8b69b.web.app/
