const workflow = {
  id: "bU4rMI7fEeeqxlvy4NOyyA==", 
  projectId: "bOd74o7fEeeqxlvy4NOyyA==", 
  acctId: "GVb1w0skuUKO+FfzgvG+JA==",
  stages: [
    {
      id: 1,
      action: "Import", 
      isStart: true, 
      prevStage: null, 
      nextStage: 2
    }, 
    {
      id: 2, 
      action: "Sort", 
      isStart: false,
      prevStage: 1, 
      nextStage: 3
    },
    {
      id: 3,
      action: "Extract", 
      isStart: false, 
      prevStage: 2, 
      nextStage: null
    },
    {
      id: 4,
      action: "Export", 
      isStart: false, 
      prevStage: null, 
      nextStage: null

    }
  ]
};

export default workflow;