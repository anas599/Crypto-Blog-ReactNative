
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: any = ([process.env.FIREBASE_API_KEY,process.env.AUTH_DOMAIN,process.env.PROJECT_ID,process.env.STOREAGE_BUCKET,process.env.MESSAGING_SENDER_ID,process.env.APP_ID]);


const firebaseVarSlice = createSlice({
  name: 'firebaseVar',
  initialState,
  reducers: {
    setFbaseKey: (state, action: PayloadAction<any>)=> {
      state = action.payload;
    },
  },
});


export const { setFbaseKey } = firebaseVarSlice.actions;


export default firebaseVarSlice.reducer;
