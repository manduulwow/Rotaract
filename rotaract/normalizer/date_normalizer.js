module.exports = {
    date_normalizer: (date) => {
        let normalized_date = (date.length > 10) ? date.substring(0,10) : date
        normalized_date = (normalized_date.length > 4) ? normalized_date : normalized_date+'/07/01'
        return normalized_date
    }
}

