import UserItemPage from 'components/user_item_page';
import React, { useState } from 'react';
import { Pagination } from 'antd';

const View = () => {
	const [page, setpage] = useState(1);
	const [users, setusers] = useState(6);


	const onChange=(pageNumber)=>{
		console.log('pageNumber',pageNumber)
		setpage(pageNumber)
	}

	return (
		<div className={'page contacts'}>
			<div>

			</div>
			<div>
				<UserItemPage page={page} users={users} />
				<Pagination
					total={85}
					showSizeChanger
					onChange={onChange} 
					showTotal={total => `Total ${total} items`}
				/>
			</div>
		</div>
	);
};

export { View };
