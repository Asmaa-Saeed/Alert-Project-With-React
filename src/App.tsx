import Alert from './compnents/Alert/Alert'
import './App.css'
import { Info  , ShieldX , PrinterCheck , TriangleAlert } from 'lucide-react';

const App = () => {
  
  return (
    <>
      <Alert type={"info-wrapper"} icon={<Info size={18}  />} title='info' desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
      <Alert type={"success-wrapper"} icon={<PrinterCheck size={18}/>} title={'Success'} desc={ <>"Lorem Ipsum is simply. Lorem Ipsum has been the industry's standard dummy text ever , when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."</>} />
      <Alert type={"warning-wrapper"} icon={<TriangleAlert size={18}  />} title='warning' desc="Lorem Ipsum is simply. Lorem Ipsum has been the industry's standard , when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
      <Alert type={"error-wrapper"} icon={<ShieldX size={18} />} title='error' desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
    </>
  )
}

/**
 * The main application component.
 *
 * This component renders a simple page with an error alert.
 *
 * @returns The main application component.
 */
export default App
