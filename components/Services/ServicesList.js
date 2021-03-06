import React,{useState,useEffect} from "react";
import { FlatList,RefreshControl} from "react-native";
import SerrvicesItem from '../../components/Services/ServicesItem'
import { getServices} from '../../api'

const ServicesList = () => {

    const [refreshing, setRefreshing] = React.useState(false);

  const [Services, setServices] = useState([])
  
  const loadServices = async () => {
    const data = await getServices()
    setServices(data.data);
  };
  useEffect(() => {
    loadServices();
  }, []);

  //Eliminar
  const handleDelete = async (service_id) => {
    await deleteService(service_id)
      //console.log(id_category)
    await loadServices ()//volver a cargar datos
}
  const renderItem = ({ item }) => {
 return <SerrvicesItem Service={ item }handleDelete={handleDelete} />
        
};
  const onRefresh = React.useCallback(async () => {

    setRefreshing(true);
    await loadServices () ;
    setRefreshing(false);
})
  return (
    <FlatList
    style={{ width: '100%'}}
      data={Services}
      keyExtractor={(item) => item.service_id + ""}
      renderItem={renderItem}

      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          colors={["#78e08f"]}
          onRefresh={onRefresh}
          progressBackgroundColor="#000"
    />
}
/>
  );
};
export default ServicesList;
