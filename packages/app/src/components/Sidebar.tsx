import React from 'react';
import { withApollo, Query } from 'react-apollo';
import { SidebarContainer } from './elements';
import { FETCH_NOTES } from '../graphql/queries';

interface SidebarProps {
	collapsed: boolean;
}

const Sidebar = ({ collapsed }: SidebarProps) => (
	<Query query={FETCH_NOTES}>
		{({ loading, error, data }: any) => {
			if (error) return <p>Error</p>;
			if (loading) return <p>Loading</p>;
			console.log(data);
			return <SidebarContainer />;
		}}
	</Query>
);

export default withApollo(Sidebar);
