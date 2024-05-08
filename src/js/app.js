import {firebaseConfig} from "./firebaseConfig"

import { initalizedApp } from "firebase/app"

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"

initalizedApp(firebaseConfig)

const authService = getAuth();

const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const signInButton = document.querySelector('.sign-in-button');
const signOutButton = document.querySelector('.sign-out-button');
const signUpButton = document.querySelector('.sign-up-button');
const errorMessage = document.querySelector('.error-message');

const frontPage = document.querySelector('.front-page');
const secretSection = document.querySelector('.secret-section');

signUpButton.addEventListener('click', ()=>{

})

signInButton.addEventListener('click', ()=>{

})

signOutButton.addEventListener('click', ()=>{

})