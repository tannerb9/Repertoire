This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Repertoire

<div align="center">
  <div style="display: flexd">
    <img src="src/Icons/RecipeList.png" style="width: 18% !important; margin-inline: 0 2%; border: .5px solid black; border-radius:5px"/>
    <img src="src/Icons/RecipeCard.png" style="vertical-align: top; width: 18% !important; margin-inline: 0 2%; border: .5px solid black; border-radius:5px"/>
    <img src="src/Icons/RecipeEdit.png" style="width: 18% !important; margin-inline: 0 2%; border: .5px solid black; border-radius:5px"/>
    <img src="src/Icons/TestList.png" style="width: 18% !important; margin-inline: 0 2%; border: .5px solid black; border-radius:5px"/>
    <img src="src/Icons/VersionList.png" style="width: 18% !important; margin-inline: 0 2%; border: .5px solid black; border-radius:5px"/>
  </div>
</div>

An app to combine your recipe journal and cookbook into one! Repertoire allows users to differentiate between finalized and test versions of a recipe.

#### Key Features:

- Recipe Cards - View a recipe's ingredients, notes, and directions.
- Recipe Tracking - Make and save alterations during recipe testing.
  - Version History - All versions conveniently saved in one location.
- Cookbook - Finalized recipes are moved to the Recipes tab.

#### To Run

1. From this repo's home page, click the green **Code** button.
2. On the dropdown menu, click the **Use SSH** link and copy the provided URL.
3. In the terminal, execute **git clone _paste SSH url here_**.
4. Cd into **repertoire/api** and create a **Database.json** file. Then, execute **json-server -p 8088 data.json**.
5. Cd into **repertoire/modules** and open **DataManager.js**. Change the **remoteURL** variable to your local server's url and save.
6. From the root directory, execute **npm start**

#### Tech Used

- Javascript
- ReactJS
- JSON server
- CSS

#### ERD

<img src="src/Icons/RepertoireERD.png" width="100%" height="auto">

#### Contributors

Tanner Brainard
