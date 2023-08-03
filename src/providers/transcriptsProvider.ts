import { HaDataProviderType } from './HaDataProviderType'
import { transcriptApi } from './api'

const transcriptsProvider: HaDataProviderType = {
    async getList(page, perPage, filter){
      const result = await transcriptApi().getStudentTranscripts(filter.studentId, page, perPage)
      return result.data;
    },

    async getOne(){
      //TODO: implements getOne provider. (tips) parse url
    },

    async saveOrUpdate(){

    }
}

export default transcriptsProvider;