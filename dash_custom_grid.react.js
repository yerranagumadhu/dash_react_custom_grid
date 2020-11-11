import React, {Component,useState,useRef, useCallback} from 'react';
import PropTypes from 'prop-types';
/*Import the packages required */
import Paper from "@material-ui/core/Paper";
import {
    SummaryState,
    IntegratedSummary,
  
    GroupingState,
    IntegratedGrouping,
  
    DataTypeProvider,
  
    SortingState,
    IntegratedSorting,
  
    PagingState,
    IntegratedPaging,
  
    FilteringState,
    IntegratedFiltering,
  
    SearchState,
  
    SelectionState,
    IntegratedSelection,
  
    EditingState,
    
  } from "@devexpress/dx-react-grid";
  
  import { 
    GridExporter ,
  } 
  from '@devexpress/dx-react-grid-export';
  import saveAs from 'file-saver';
  import {
    Grid,
    Table,
    TableHeaderRow,
    TableGroupRow,
    TableSummaryRow,
    Toolbar,
    GroupingPanel,
    PagingPanel,
    TableFilterRow,
    SearchPanel,
    TableSelection,
    VirtualTable,
    TableColumnResizing,
    ExportPanel,
  
    DragDropProvider,  
  
    TableEditRow,
    TableInlineCellEditing,
  } from "@devexpress/dx-react-grid-material-ui";
  
/* until here */  
/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */



export default function  dash_custom_grid(props) {    
        
        //const {id, label, value,setProps, columns,rows, currencyColumns} = props;     
        const {
                id,                 
                columns,                 
                rows,                
                groupSummaryItems,
                defaultSortingItems,
                groupingColumn,
                pageSizeItem, 
                selection,
                defaultColumnWidths,
                editingRowIds,
                rowChanges
            } = props;

        const [rows_v1,setRows] = useState(rows);

        const [groupingColumn_v1, setGroupingColumn_v1] = useState(groupingColumn);
        const [selection_v1, setSelection_v1] = useState(selection);
        
        const exporterRef = useRef(null);

        const [defaultColumnWidths_v1] = useState(defaultColumnWidths);

        const [editingRowIds_v1, setEditingRowIds_v1] = useState([editingRowIds]);
        const [rowChanges_v1, setRowChanges_v1] = useState({rowChanges});

        const startExport = useCallback((options) => {
            exporterRef.current.exportGrid(options);
          }, [exporterRef]);

        const onSave = (workbook) => {
            workbook.xlsx.writeBuffer().then((buffer) => {
              saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
            });
          };
        
        const commitChanges = ({ changed }) => {
            let changedRows;
            if (changed) {
              changedRows = rows.map((row) =>
                changed[row.id] ? { ...row, ...changed[row.id] } : row
              );            
            }
            setRows(changedRows);
          };
          //<input value={value} onChange={ e => setProps({ value: e.target.value }) } />
        return (
            <div id={id}>            
            <span>
            Total rows selected:
            {' '}
            {selection_v1.length}
            </span>
            <Paper>
                <Grid rows={rows_v1} columns={columns}>
                
                <EditingState
                    editingRowIds={editingRowIds_v1}
                    onEditingRowIdsChange={setEditingRowIds_v1}
                    rowChanges={rowChanges_v1}
                    onRowChangesChange={setRowChanges_v1}
                    onCommitChanges={commitChanges}
                /> 

                <SortingState defaultSorting={defaultSortingItems}/>

                <DragDropProvider />
                <GroupingState grouping={groupingColumn_v1} onGroupingChange={setGroupingColumn_v1} />

                <SummaryState groupItems={groupSummaryItems} />
                
                <PagingState defaultCurrentPage={0} pageSize={pageSizeItem} />
                <FilteringState defaultFilters={[]} />
                <SearchState defaultValue={[]}/>
                <SelectionState selection={selection_v1} onSelectionChange={setSelection_v1}/>
                
                <IntegratedSorting />
                <IntegratedGrouping />
                <IntegratedSummary />
                <IntegratedFiltering />
                <IntegratedSelection />
                <IntegratedPaging />
                <Table />

                

                <TableColumnResizing defaultColumnWidths={defaultColumnWidths_v1} />
                <VirtualTable />
                <TableHeaderRow showSortingControls />   

                
                <TableInlineCellEditing /> 
                    
                <TableSelection showSelectAll />
                <TableEditRow />
                <TableGroupRow />  
                    
                <Toolbar />    
                    
                <GroupingPanel showSortingControls showGroupingControls /> 
                <SearchPanel />  
                <TableFilterRow />             
                <TableSummaryRow />          
                <PagingPanel />
                <ExportPanel startExport={startExport} />
                
                </Grid>
                <GridExporter
                ref={exporterRef}
                rows={rows}
                columns={columns}
                grouping={groupingColumn_v1}
                //totalSummaryItems={totalSummaryItems}
                groupSummaryItems={groupSummaryItems}
                selection={selection_v1}

                onSave={onSave}
            />
            </Paper>
        </div>
        );
    }


dash_custom_grid.defaultProps = {};

dash_custom_grid.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

   
     /**
     *columnDefs for ag-Grid.
     */
    columns: PropTypes.array,
    
    rows: PropTypes.array,

    currencyColumns: PropTypes.array,
   
    setRows:PropTypes.array,
    groupSummaryItems:PropTypes.array,
    defaultSortingItems:PropTypes.array,
    groupingColumn: PropTypes.array,
    setGroupingColumn:PropTypes.array,
    pageSizeItem: PropTypes.number,
    selection: PropTypes.array,
    
    defaultColumnWidths:PropTypes.array,
    editingRowIds:PropTypes.array,
    
    rowChanges:PropTypes.array,
    
    rowData: PropTypes.array,
    
};
