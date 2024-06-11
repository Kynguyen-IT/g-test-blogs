import { takeEvery, put, delay } from 'redux-saga/effects';
import { increment, incrementByAmount } from '../slices/blogSlice';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function* incrementAsync(actions: ReturnType<typeof incrementByAmount>) {
  yield delay(1000);
  yield put(increment());
}

function* watchIncrementAsync() {
  yield takeEvery(incrementByAmount.type, incrementAsync);
}

export default watchIncrementAsync;
