let axios = require('axios')

module.exports = {
    getAllOradores: (req, res) => {
        axios.get('https://api.tutorah.tv/v1/speakers?section=1', { headers: { "Authorization": `19ac3586f1722e4b42b2b821d4b4db4b` } })
            .then((response) => { 
                let result = response.data

                res.status(200).json({ message: 'Oradores loaded!', data: result }) 
            })
            .catch((err) => {console.log(err); res.status(400).json({ message: 'I am Error / Oradores not loaded', data: err }) })
    }
}