import React,{useCallback} from 'react'
import { Button, Drawer, Icon, Alert } from 'rsuite'
import { useMediaQuery, useModalState } from '../../misc/custom-hooks'
import Dashboard from '.'
import {auth} from '../../misc/firebase'

const DashboardToggle = () => {
    const {isOpen,open,close}=useModalState()
    const isMobile=useMediaQuery('(max-width:992px)')
    const onSignOut = useCallback(() => {
      
          auth.signOut();
          Alert.info('Signed out', 4000);
          close()
    }, [close]);
  return (
    <>
        <Button clock color='blue' onClick={open}>
            <Icon icon="dashboard"/>Dashboard
        </Button>
        <Drawer full={isMobile} show={isOpen} onHide={close} placement='left'>
            <Dashboard onSignout={onSignOut}/>
        </Drawer>
    </>
  )
}

export default DashboardToggle
