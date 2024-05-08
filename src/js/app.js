import {firebaseConfig} from "./firebaseConfig"

import { initalizedApp } from "firebase/app"

import { getAuth } from "firebase/auth"

initalizedApp(firebaseConfig)

const authService = getAuth();