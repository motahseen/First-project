// import DatalabelingServiceClient;

class Dataset {

    constructor(projectId) {

        try {

            DataLabelingServiceClient = DataLabelingServiceClient.create();
            var formattedProjectName = DataLabelingServiceClient.formatProjectName(datalabeling-samples-motahseen);


            Dataset = Dataset.newBuilder()
                .setDislpayName("mohammed")
                .setDescription("Dataset creation")
                .build();

             
            CreateDatasetRequest = CreateDatasetRequest.newBuilder()
                 .setParent(formattedProjectName)
                 .setDataset(dataset)
                 .build();
                 
                 
            Dataset = dataLabelingServiceClient.createdDataset(createdDatasetRequest);

            console.log('mohammed:'+ createDataset.getName());
            console.log('mohammed:'+ createdDataset.getDisplayName());
            console.log('Dataset creation):'+ createDataset.getDescription());

        }
        
        catch (error) {

            console.error(error);

        }
    }
}
