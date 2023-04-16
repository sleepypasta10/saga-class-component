import {takeEvery, delay, put, takeLatest, call} from 'redux-saga/effects';

const getDataFromAPI = async () => {
    let res = await fetch('https://teachingserver.onrender.com/User');
    let data = await res.json();

    return {
        statusCode: res.status,
        data: data
    }
}

function* getData() {
    yield put({
        type: "setStatus",
        payload: "API dang duoc goi"
    })
    let info = yield call(getDataFromAPI)
    yield delay(3000)
    if (info.statusCode === 200) {
        yield put({
            type: "setData",
            payload: info.data
        })
    } else {
        yield put({
            type: "setStatus",
            payload: "API dang duoc goi"
        })
    }
}

function* abcCall(action) {
    console.log(action);
    // yield put ({ type: "ADD", payload: {
    //     id: 1,
    //     name: 'Dao'
    // }})
}

function* mySaga() {
    yield takeEvery("COUNT", getData)
    yield takeLatest("abc", abcCall)
   
}

export default mySaga;
// Nếu trong function có saga thì sau function sẽ có dấu *, ở đâu có effect của saga ở trước đó yield .
// takeLatest để pending dữ liệu rồi mới call api, vd: input