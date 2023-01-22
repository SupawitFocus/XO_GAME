# Getting Started 
This is an example of how you may give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.


## Tool required in project (This Project Built with React App)
1. Visual Studio Code    [download](https://code.visualstudio.com/)
2. Node JS   [download](https://nodejs.org/en/)
3. npm


## How to set-up
1. Click green button `Code`
2. Click `Download ZIP` for open project in local.

![download ](https://user-images.githubusercontent.com/94596185/213903569-972b3e78-896e-476a-b1cb-29c9f8ecf224.jpg)

3. Download and Extract File.

## How to run project
1. Open `Visual Studio Code`
2. Click `File` > `Open Folder...` and find folder form location Extract File.

![Screenshot 2023-01-22 133551](https://user-images.githubusercontent.com/94596185/213903873-2a88f772-9f78-4b32-a45b-511c1790edbe.jpg)

3. Open project and Check file in project.
4. Click tool bar `Terminal` > `New Terminal`

![Screenshot 2023-01-22 134406](https://user-images.githubusercontent.com/94596185/213904147-1db058f7-6382-4990-a869-0f7f50b54be1.jpg)

5. In terminal change `Powershell` to `Command Prompt`

![Screenshot 2023-01-22 134912](https://user-images.githubusercontent.com/94596185/213905661-33a48391-3ff5-4ebd-a82a-66e789a07fe4.jpg)

6. Use command `cd folder name`. Example `cd XO_GAME-master`
7. Install packet for app `npm i react-scripts`
8. After install packet you can run app with command `npm start`
9. Enjoy with project!

## Design
### Font End
1. Create component of Game. By component this game include
Square, Board, ValueSize, Hitory and Game. 
2. Square component use for put on Board component. 
And generate new button array in Board component and size of array
set size in ValueSize component.

![square](https://user-images.githubusercontent.com/94596185/213908265-84462db8-e094-4080-b7cb-0831ff274d9e.jpg)

![board](https://user-images.githubusercontent.com/94596185/213908282-9e9fe375-465d-4ef5-a929-0389c8a1a498.jpg)

![value](https://user-images.githubusercontent.com/94596185/213908549-9950ac16-90ff-4d0c-9784-cae88e2c93a0.jpg)

3. In file Game component will have use all component follow in figure

![game](https://user-images.githubusercontent.com/94596185/213908825-2e7e321a-4eb1-4480-89d6-d400186aca2a.jpg)

4. Fuction in Board component link to on click of Square component for check player X or O and set history each step.

![handle](https://user-images.githubusercontent.com/94596185/213913006-c4d2e9c6-67b5-4bf8-971d-5c62a9c4feb3.jpg)

### Back End
this project use realtime-firebase for keep data history of game XO. Database structure will use JSON pattern.

**Connecting to database** 
1. Create firebase in [link (click get started)](https://firebase.google.com/) 
2. Create Project firebase and input your name project.

![create firebase](https://user-images.githubusercontent.com/94596185/213914496-d462858f-9dc3-412c-b410-c38a0fc9e125.jpg)

3. Add Firebase to your web app. and copy code for initialize Firebase.

![web](https://user-images.githubusercontent.com/94596185/213914658-adb3d68a-adec-4140-bc6f-a5fbb7e293a1.jpg)
![generate](https://user-images.githubusercontent.com/94596185/213914532-09e22598-fe00-4a8f-865e-2f73bda255e1.jpg)

4. Create file and paste code initialize Firebase for Connect the database to the project. 

![connect](https://user-images.githubusercontent.com/94596185/213914551-11019188-2dd8-4354-8c92-5e02197aa910.jpg)

5. Create fuction for set data to firebase name part `history`. And create name object from date for unique. By each id have childen key is size, history, winner, date and time.

![Screenshot 2023-01-22 191217](https://user-images.githubusercontent.com/94596185/213915126-4c29b057-c180-4fcb-87a3-d72fcca37bbf.jpg)

**Example Data in Firebase**

![example](https://user-images.githubusercontent.com/94596185/213915260-ab9d6a52-bf43-4ba0-b5d2-391ad8c3f7eb.jpg)

### Get data from Firebase
In getting data form firebase i will create history page. By create fuction and return each data for componenet.

![Screenshot 2023-01-22 192750](https://user-images.githubusercontent.com/94596185/213915778-b139a662-cc6a-4ed3-9eeb-87b613632f3d.jpg)

![return](https://user-images.githubusercontent.com/94596185/213919725-63263742-5703-403d-876a-1084980f80a3.jpg)

