import React, {useState} from 'react';
import clsx from 'clsx';
import {Card, CardHeader, CardContent, Menu, MenuItem, Button} from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const ChartHead = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      
    const [chartStyle, setChartStyle] = useState("도넛형")
    const handleClose = (param) => {
        setAnchorEl(null);
        switch(param){
            case 1: return setChartStyle("도넛형");
            case 2: return setChartStyle("바형")
            case 3: return setChartStyle("종합형")
            default: return setChartStyle("문제 발생")
        }
        
    };

    return (
        <Card>
        <CardHeader
            action={
          <div>
          <Button 
            aria-controls="simple-menu" 
            aria-haspopup="true" 
            onClick={handleClick} 
            size="small" 
            variant="text">
          {chartStyle}<ArrowDropDownIcon />
          </Button>
          <Menu
           id="simple-menu"
           anchorEl={anchorEl}
           keepMounted
           open={Boolean(anchorEl)}
           onClose={handleClose}>
          <MenuItem onClick={()=>{handleClose(1)}}>도너츠형</MenuItem>
          <MenuItem onClick={()=>{handleClose(2)}}>바형</MenuItem>
          <MenuItem onClick={()=>{handleClose(3)}}>종합형</MenuItem>
        </Menu>
        </div>}
        
        title="통계 Detail"
      />
    </Card>
    )}

export default ChartHead