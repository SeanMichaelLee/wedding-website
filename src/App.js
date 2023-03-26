import React, { Component } from 'react'
import Landing from './views/Landing'
import ThingsToDo from './views/ThingsToDo'
import Registry from './views/Registry'
import Rsvp from './views/Rsvp'
import Events from './views/Events'
import Photos from './views/Photos'
import Header from './views/Header'
import Footer from './views/Footer'
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <BrowserRouter>
                        <Header/>
                        <Routes>
                            <Route path="/" element={<Landing/>}/>
                            <Route path="/events" element={<Events/>}/>
                            <Route path="/photos" element={<Photos/>}/>
                            <Route path="/thingstodo" element={<ThingsToDo/>}/>
                            <Route path="/registry" element={<Registry/>}/>
                            <Route path="/rsvp" element={<Rsvp/>}/>
                        </Routes>
                        <Footer/>
                    </BrowserRouter>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default App