<h1 align="center">💼</h1>
<h3 align="center">working-label-action</h3>

## Examples

Imagine we have a project with some owners, each time we create a pull request the owners are automatically assigned as reviewers. In some cases we continue working on the pull request becase we found some issue, and we want to notify to the other members of the project that we are continue working on this which means we don't want their review at this moment since the code is going to change. Here is where this action comes to help us.

We can configure 2 labels, on the one hand when is "**Ready to review**" and on the other hand when is "**Work in progress**". Each time you update the pull request the action will remove "Ready to review" and will add "Work in progress". 

## Usage

You can create a `.github/workflows/working-label.yml` file:

```yaml
name: Assign work in progress label when pull request is updated
on: [pull_request]
jobs:
  working_label:
    runs-on: ubuntu-latest
    name: Label working progress
    steps:
      - uses: AlbertHernandez/working-label-action@v1.0.0
        with:
          work_in_progress_label: 'Work in progress'
          ready_to_review_label: 'Ready to review'
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

```

## Inputs

| Name | Description | Required |
|------|-------------|----------|
| work_in_progress_label | Label to indicate that a pull request still in progress. If this label is no created the action will create it | true |
| ready_to_review_label | Label to indicate that a pull request is ready to be reviewed. If this label is no created the action will create it | true |
