import { configureStore } from '@reduxjs/toolkit';
import userDet  from '../Features/UserDetails';

export default configureStore({
  reducer: {
    userDet:userDet
  },
});