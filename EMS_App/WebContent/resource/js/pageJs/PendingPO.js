function populateJqGrid(data) {
    'use strict';
   
     var gidData =data,
        theGrid = $("#theGrid"),
        numberTemplate = {formatter: 'number', align: 'right', sorttype: 'number'},
        horizontalScrollPosition = 0,
        selectedRow = null;

     var myCustomFormatterEdit = function(cellVal,options,rowObject) {
       
         return "<a class='logoedit' title='Details' onclick=\"sendtoEdit('"+cellVal+"')\" ></a>"; 
         //<input style='height:22px;' type='button' value='Edit' onclick=\"window.location.href='editItem.asp?ID="+cellVal+"'\"  />
     };
   
     
     
    theGrid.jqGrid({
        datatype: 'local',
        data: gidData,
        colNames: ['Region', 'Distributor Code','Distributor Name','Order Type','Order Number','Order Raised Date','Order Raised By','Status','Details'],
        colModel:[
        
            {name: 'region', index: 'region', width:300},
            {name: 'distributorCode', index: 'distributorCode', width:300},
            {name:'distributorName', index: 'distributorCode', width:300},
            {name: 'orderType', index: 'orderType', width:300},
            {name: 'poNumber', index: 'poNumber', width:300},
             
            {name: 'poRaisedDate', index: 'poRaisedDate', width:300},
            {name: 'poRaisedBy', index: 'poRaisedBy', width:300},
                {name: 'status', index: 'status', width:300},
            {name:'edit',formatter:myCustomFormatterEdit}
        ],
        gridview: true,             
        rownumbers: false,
        rowNum: 10, 
        rowList: [5, 10, 15],
        pager: '#gridPager',
        viewrecords: true,
        multiSort:true,
        sortname: 'orderdate asc, price',
        sortorder: 'asc',   
        editurl: '#',
        caption: 'View Pending Order Details',
        height: '100%',width:'1000'
    });
    jQuery("#theGrid").jqGrid('navGrid','#gridPager',{edit:false,add:false,del:false});
}