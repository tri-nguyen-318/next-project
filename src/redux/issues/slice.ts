import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IssueState {
  issues: any[];
}

const initialState = { issues: [] } satisfies IssueState as IssueState;

const issueSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    addIssue(state, action: PayloadAction<{ issue: any }>) {
      state.issues.push(action.payload.issue);
    },
  },
});

export const issueActions = issueSlice.actions;
export default issueSlice.reducer;
