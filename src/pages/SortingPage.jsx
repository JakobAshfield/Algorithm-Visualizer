import React, {useState} from 'react'
import ControlsPanel from '../components/ControlsPanel.jsx'
import VisualizationCanvas from '../components/VisualizationCanvas.jsx'
import CodeViewer from '../components/CodeViewer.jsx'
import { generateRandomArray } from '../utils/randomArray.js'

export default function SortingPage() {
    const [array, setArray] = useState(generateRandomArray())

    return (
        <div
            style={{
                display: 'flex',
                gap: '1rem',
                padding: '1rem',
                height: '80vh', // optional: keep panels tall
            }}
        >
            <ControlsPanel array={array} setArray={setArray}/>
            <VisualizationCanvas array={array}/>
            <CodeViewer />
        </div>
    )
}
