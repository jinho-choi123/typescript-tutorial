import axios from 'axios';

describe('connecting to Auth Server', () => {
    it('connect to auth server', (done) => {
        axios.get('http://auth-server:9090/checkserver')
            .then(() => {
                done()
            })
            .catch((err) => {
                done(new Error("Error occur while testing connectin for auth server"))
            })
    })
})