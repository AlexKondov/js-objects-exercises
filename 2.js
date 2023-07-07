function solve(input) {
  input
    .map((city) => {
      const [town, latitude, longitude] = city.split(" | ");
      return { town, latitude, longitude };
    })
    .forEach((city) => {
      console.log(JSON.stringify(city));
    });
}

solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
