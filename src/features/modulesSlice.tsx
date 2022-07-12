import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux';
import usePostModules from '../hooks/usePostModules';
import usePostModulesChat from '../hooks/usePostModulesChat';
import usePostModulesFeuDArtifice from '../hooks/usePostModulesFeuDArtifice';
import usePostModulesFresque from '../hooks/usePostModulesFresque';
import usePostModulesLivreDOr from '../hooks/usePostModulesLivreDOr';
import usePostModulesPhotosVideos from '../hooks/usePostModulesPhotosVideos';
import usePostModulesPlaylist from '../hooks/usePostModulesPlaylist';


const initialState = {
  data: [{
    id_event:"",
    photos_videos:{},
    livre_d_or:{},
    fresque:{},
    playlist:{},
    chat:{},
  },]
};
  

export const updateModule = createAsyncThunk('modules/updateModule', async(formModule:any) => {
    const updateModule = usePostModules();
    updateModule(formModule);
})

export const updateModuleSlicePhotosVideos = createAsyncThunk('modules/updateModulePhotosVideos', async(formModulePhotosVideos:any) => {
  const updateModulePhotosVideos = usePostModulesPhotosVideos();
  console.log(formModulePhotosVideos)
  updateModulePhotosVideos(formModulePhotosVideos);
})

export const updateModuleSliceChat = createAsyncThunk('modules/updateModuleChat', async(formModuleChat:any) => {
  const updateModuleChat = usePostModulesChat();
  console.log(formModuleChat)
  updateModuleChat(formModuleChat);
})

export const updateModuleSliceLivreDOr = createAsyncThunk('modules/updateModuleLivreDOr', async(formModuleLivreDOr:any) => {
  const updateModuleLivreDOr = usePostModulesLivreDOr();
  console.log(formModuleLivreDOr)
  updateModuleLivreDOr(formModuleLivreDOr);
})

export const updateModuleSliceFresque = createAsyncThunk('modules/updateModuleFresque', async(formModuleFresque:any) => {
  const updateModuleFresque = usePostModulesFresque();
  console.log(formModuleFresque)
  updateModuleFresque(formModuleFresque);
})


export const updateModuleSliceFeuDArtifice = createAsyncThunk('modules/updateModuleFeuDArtifice', async(formModuleChat:any) => {
  const updateModuleFeuDArtifice = usePostModulesFeuDArtifice();
  updateModuleFeuDArtifice(formModuleChat);
})

export const updateModuleSlicePlaylist = createAsyncThunk('modules/updateModulePlaylist', async(formModulePlaylist:any) => {
  const updateModulePlaylist = usePostModulesPlaylist();
  console.log(formModulePlaylist)
  updateModulePlaylist(formModulePlaylist);
})

const modulesSlice = createSlice({
  name: 'modules',
  initialState: initialState, 
  reducers: {
    setModulesData : (state, {payload}) => {
      state.data = payload;
    },
  }
})

  export const { setModulesData } = modulesSlice.actions
  export const getAllModules = (state: any) => state.modules
  
  export default modulesSlice.reducer;