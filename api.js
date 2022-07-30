export const database = [
    { name: 'Home Alone', imgUrl: 'https://usercontent1.hubstatic.com/14760444_f520.jpg' },
    { name: 'Harry Potter', imgUrl: 'https://tse4.mm.bing.net/th?id=OIP.MpyZqbzROoTvIaGSsimAfgHaFj&pid=Api&P=0' },
    { name: 'Muppet movies', imgUrl: 'https://babyandbreakfast.ph/wp-content/uploads/2018/02/classic-movies-for-kids-09.jpg' },
    { name: 'Scaredy Cat', imgUrl: 'https://tse2.mm.bing.net/th?id=OIP.rTfrQm08wZ9o-g9QXBMo3AHaEd&pid=Api&P=0' },
    { name: 'Cars 3', imgUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_cars3_19643_3ab8aca1.jpeg' }
]
export const availibility = {
    'Home Alone': [1, 2, 5, 8, 9, 19, 22, 20, 11],
    'Harry Potter': [1, 2, 3, 5, 6, 10, 11, 12, 13, 14, 15, 16, 17, 24],
    'Muppet movies': [1, 2, 3, 4, 5, 6, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    'Scaredy Cat': [4, 6, 8, 10, 11, 12, 13, 14, 15, 16],
    'Cars 3': [3, 5, 7, 9, 20, 21, 12, 13, 19, 24]
}
const fetchMovieList = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(database)
        }, 500)
    })
}

const fetchMovieAvailability = async(movieName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (const m in availibility) {
                if (m === movieName) resolve(availibility[m])
            }
            resolve([])
        }, 500)
    })
}

export { fetchMovieList, fetchMovieAvailability }