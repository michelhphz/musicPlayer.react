/*
    Developed by.........: Michel Pech
    Date project.........: Febuary, 2021
    Name Project.........: Music Player
*/

import app from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

    let firebaseConfig = {
        apiKey: "AIzaSyAAcTEXd7jKbmVrmr2viGE85XC2S7eANHs",
        authDomain: "blogstd-2b709.firebaseapp.com",
        databaseURL: "https://blogstd-2b709.firebaseio.com",
        projectId: "blogstd-2b709",
        storageBucket: "blogstd-2b709.appspot.com",
        messagingSenderId: "628502824662",
        appId: "1:628502824662:web:a28df57cb230910311ab77"
      } 

class Firebase
{
    constructor()
	{
        app.initializeApp(firebaseConfig)

        this.app = app.database()
    }

    login(email, password)
	{
        return app.auth().signInWithEmailAndPassword(email, password)
    }
	
	logout()
	{
		return app.auth().signOut()
	}

    async register(nome, email, password)
	{
        await app.auth().createUserWithEmailAndPassword(email, password)

        const uid = app.auth().currentUser.uid;

        return app.database().ref('usuarios').child(uid).set(
		{
            nome: nome
        })
    }

    isInitialized()
	{
        return new Promise(resolve => 
		{
            app.auth().onAuthStateChanged(resolve)
        })
    }
	
	getCurrent()
	{
		return app.auth().currentUser && app.auth().currentUser.email
	}
	
	async getUserName(callback)
	{
		if(!app.auth().currentUser)
		{
			return null;
		}
		
		const uid = app.auth().currentUser.uid
		await app.database().ref('usuarios').child(uid)
		.once('value').then(callback)
	}

    get(data)
    {
        if(data === 'tracks')
        {
            const tracks = app.database().ref('tracks')
            return tracks            
        }
    }    
}

export default new Firebase()