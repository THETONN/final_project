import './Table.css'
import {Line} from 'react-chartjs-2'
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer ,
        PieChart, Pie, AreaChart, Area,
} from 'recharts';

import { Grid, Paper } from '@material-ui/core';
import { useResizeDetector } from '../looplimit/looplimit';


function Chartts(){
  const { width, height, ref } = useResizeDetector();
    const data = [
        {
          name: 'G1',
          uv: 4000,
          People: 2400,
          amt: 2400,
        },
        {
          name: 'G2',
          uv: 3000,
          People: 1398,
          amt: 2210,
        },
        {
          name: 'G3',
          uv: 2000,
          People: 9800,
          amt: 2290,
        },
        {
          name: 'G4',
          uv: 2780,
          People: 3908,
          amt: 2000,
        },

      ];
      const data01 = [
        { name: "Group 1", value: 400 },
        { name: "Group 2", value: 300 },
        { name: "Group 3", value: 300 },
        { name: "Group 4", value: 200 },
      
      ];
      const data02 = [
        {
          name: 'Group 1',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Group 2',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Group 3',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Group 4',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        
        
      ];



    return (
        

        
            <Grid Grid container spacing={2} ref={ref}>
                <Grid item xs={12} sm={6} className="grid">
                    <Paper className="paper"> 
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart className="bar"
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                                barSize={20}
                                >
                                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="People" fill="#8884d8" background={{ fill: '#eee' }} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} className="grid">
                    <Paper className="paper"> 
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart width={400} height={400}>
                                <Legend />
                                <Pie dataKey="value"  data={data01} outerRadius={100} label>
                                <Cell fill="#8884d8" />
                                <Cell fill="#FF9AA2" />
                                <Cell fill="#8FC1A9" />
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
                {/* <Grid item xs={12}>
                    <Paper className="paper">
                    <ResponsiveContainer width="100%" height={220}>
                            <AreaChart
                            width={500}
                            height={400}
                            data={data02}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                            <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                            <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                            </AreaChart>
                        </ResponsiveContainer>

                    </Paper>                
              </Grid>                 */}
                
            </Grid>  
          
        
        
        
      );
}
export default (Chartts);