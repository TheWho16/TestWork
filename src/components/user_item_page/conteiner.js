import React, { useState, useEffect,useDispatch } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import View from './view';
import { getAllUserThunk } from '../../storeRedux/index'

console.log('Thnk', getAllUserThunk)

const UserItemPage = (props) => {


	const { page, users } = props
	useEffect(() => {
		// props.getAllUserThunk(page, users)
	}, [props]);

	

	return (

		<View usersData={props.usersData} />

	)
}

const mapStateToProps = (state) => {
	console.log('state in conteiner', state)
	return {
		usersData: state.contacts.usersData
	}
};

const mapDispatchToProps = getAllUserThunk(2,6)




export default compose(
	connect(mapStateToProps, mapDispatchToProps),
)(UserItemPage);



