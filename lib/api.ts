// Mock API layer for YouTube Collaboration Platform

export async function getDashboardData() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  return {
    stats: [
      { label: 'Active Collabs', value: '12' },
      { label: 'Pending Invites', value: '5' },
    ],
    activeCollaborations: [
      { id: '1', title: 'Modern Tech Setup Unboxing', partner: 'Linus Media Tech' },
    ]
  };
}

export async function getCreators(filters = {}) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: '1', name: 'Marques Brownlee', subscribers: '18.5M' },
  ];
}

export async function getMessages(contactId: string) {
  await new Promise(resolve => setTimeout(resolve, 500));
  return [
    { id: 1, text: 'Hey Alex!' },
  ];
}
