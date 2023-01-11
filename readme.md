1. 
Load the heroes inside the `<Heroes />` components using the api from heroes.constants.js.
Use a console.log() to test your response.

2. Use the `<Hero />` components to display the hero `name`, primary attribute(`primary_attr`) and all the `roles` it can play. 

3. Add some CSS to the `<Heroes />` component so that your heroes would be displayed in a grid with 6 items in each row. 

4. Use the `<AttrFilters />` components to filter the hero list based on their primary attribute (`primary_attr`)

5. 
- Import the `ROLE` object from `heroes.constants.js` into the `<RoleFilters />` component and convert it into an array. 
- Use that array to dynamically generate the role filters list instead of it being hardcoded inside the `<RoleFilters />` component. 
- Reuse the existing jsx.
- Use `<RoleFilters />` to filter the hero list.
 **NOTE:** Each hero can have multiple roles.

6. Optional:
Depending on the hero `primary_attr` change the color of the attribute tag.
If the attr is `str` make it red
If the attr is `agi` make it green
If the attr is `int` make it blue