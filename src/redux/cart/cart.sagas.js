import { takeLatest, all, put, call } from "redux-saga/effects";
import userActionTypes from "../user/user.types";
import { clearCart } from "./cart.action";

export function* clearCartOnSignout() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignout);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
