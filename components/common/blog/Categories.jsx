const Categories = () => {
  const categorieContent = [
    { id: 1, name: "Cook", propertyNumber: "6" },
    { id: 2, name: "Condo", propertyNumber: "12" },
    { id: 3, name: "Plumber", propertyNumber: "8" },
    { id: 4, name: "Electrician", propertyNumber: "26" },
    { id: 5, name: "Maid", propertyNumber: "89" },
  ];
  return (
    <ul className="list_details">
      {categorieContent.map((item) => (
        <li key={item.id}>
          <a href="#">
            <i className="fa fa-caret-right mr10"></i>
            {item.name}{" "}
            <span className="float-end">{item.propertyNumber} properties</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
