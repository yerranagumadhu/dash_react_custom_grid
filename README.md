virtualenv venv
venv\Scripts\activate
pip install cookiecutter
cookiecutter https://github.com/plotly/dash-component-boilerplate.git
cd dash_custom_grid

the code we need to modify is at this location: C:\Users\Yerra\Desktop\spark\dash_custom_app\dash_custom_grid\src\lib\components\dash_custom_grid.react.js

Building the custom DASH componet : https://medium.com/@jackylishi/build-a-custom-dash-component-5d0059c97a8e
Please look into the Following link to get started : 
https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/getting-started/
npm install
npm i --save @devexpress/dx-react-core @devexpress/dx-react-grid @devexpress/dx-react-grid-export
npm i --save @devexpress/dx-react-grid-material-ui
npm i --save @devexpress/dx-react-grid-bootstrap4
npm i --save @devexpress/dx-react-grid-bootstrap3
npm install @material-ui/core
npm install @material-ui/icons
npm i --save file-saver

pip install -r requirements.txt
pip install -r tests/requirements.txt

cd dash_custom_grid
npm run build


python setup.py sdist
pip install dash_grid_grp-0.0.1.tar.gz


cd C:\Users\Yerra\Desktop\spark\dash_app\dash_new_comp_devExtreme\dash_grid_grp\dist
dash_grid_grp-0.0.1.tar.gz


Input : 
columns : Array
currencyColumns : Array
rows,setRows: Array
groupSummaryItems: Array
defaultSortingItems: Array
groupingColumn,setGroupingColumn : Array
pageSizeItem: INT
selection, setSelection: Array
defaultColumnWidths: Array
editingRowIds, setEditingRowIds : Array
rowChanges, setRowChanges: Array
