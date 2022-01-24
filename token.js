/*
numberSubToken() ---> create 5 digit random number
getRandomIndex() ---> create new index for array less then 52
stringSubToken() ---> create random string length 5
getToken()       ---> create final unique token
*/

const getToken = () => {

    const numberSubToken = () => {
        return Math.floor(Math.random() * 100000);
    }

    const getRandomIndex = () => {
        const index = Math.floor(Math.random() * 100);
        if (index < 52) {
            return index;
        } else {
            return getRandomIndex();
        }
    }

    const stringSubToken = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        let stToken = "";
        for (let i = 0; i < 5; i++) {
            stToken += characters[getRandomIndex()];
        }
        return stToken;
    }

    return numberSubToken() + stringSubToken() + "P" + stringSubToken() + numberSubToken()
}

const token = getToken();

console.log(token);