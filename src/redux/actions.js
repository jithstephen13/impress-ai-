export const createResume = (resumeData) => {
    return {
      type: 'CREATE_RESUME',
      payload: resumeData
    };
  };
  
  export const updateResume = (resumeData) => {
    return {
      type: 'UPDATE_RESUME',
      payload: resumeData
    };
  };