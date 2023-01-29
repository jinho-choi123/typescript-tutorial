import db from "../db";
import User from "../models/User";

const createUser = (userEmail: String, userPassword1: String, userPassword2: String) => {
    const newUser = new User({
        email: userEmail,
        memoList: []
    })
    console.log(newUser);

    //db에서 중복되는 user가 존재하는지 확인한다.
    //그리고 auth container에 요청하여, user add를 한다. request가 성공적이면, mongodb에 add한다.
    return new Promise((resolve, reject) => {
        db()
            .then((conn) => {
                return newUser.save()
            })
            .then((doc) => {
                resolve(doc)
            })
            .catch((err) => {
                console.log("error occur!!!")
                reject(err)
            })
    })
    
}

export default createUser 