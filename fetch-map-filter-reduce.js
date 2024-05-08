const getDataFromEndPoint = async () => {
    const endPoint =
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
    let populationsByYears = [];
  
    // map example
    const response = await fetch(endPoint)
      .then((data) => data.json())
      .then((resp) => resp.data.map((yr) => populationsByYears.push(yr)));
  
    // console.log(populationsByYears, "response");
  
    const yearAndPopulation = populationsByYears.reduce((acc, curr) => {
      acc[curr.Year] = curr.Population;
  
      return acc;
    },{});
    // 
    console.log(yearAndPopulation, "yearAndPopulation");
    // use a reduce to set the year as the key and the population as the value
  
    // const filterByEven = populationsByYears.filter(yr => yr.Population % 2 === 0);
    // console.log(filterByEven, "filterByEven")
  
    // map example
    // const response = await fetch(endPoint)
    //   .then((data) => data.json())
    //   .then(resp => resp.data.map(yr => populationsByYears.push(yr)));
  
    // console.log(populationsByYears, "response");
  
    // try{
    // fetch(endPoint)
    // .then(data => data.json())
    // .then(data => populationsByYears.push(data?.data[0]?.Population))
    // .catch(error => console.error('an error occured:', error))
  
    //   } catch(error){
    //   console.log(error,'an error occured')
    //   }
  };
  
  getDataFromEndPoint();
  