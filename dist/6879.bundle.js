"use strict";(self.webpackChunkui_geeks_in_web=self.webpackChunkui_geeks_in_web||[]).push([[6879],{76879:(e,l,n)=>{n.r(l),n.d(l,{default:()=>m});var t=n(67294),a=n(90835),r=n(59044),c=n(87398),u=n(68947),i=n(9167);const m=function(){return t.createElement(r.Z,null,t.createElement(c.Z,{as:"h1"},"Get Diagonal Difference"),t.createElement(u.Z,null,"Given a square matrix, calculate the absolute difference between the sums of its diagonals."),t.createElement(u.Z,null,"For example, the square matrix is shown below:"),t.createElement(u.Z,null,"1",t.createElement(i.Ai,null),"2",t.createElement(i.Ai,null),"3",t.createElement(i.cJ,null),"4",t.createElement(i.Ai,null),"5",t.createElement(i.Ai,null),"6",t.createElement(i.cJ,null),"9",t.createElement(i.Ai,null),"8",t.createElement(i.Ai,null),"9"),t.createElement(u.Z,null,"The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 9 = 17. Their absolute difference is |15 - 17| = 2.",t.createElement(u.Z,null,t.createElement(i.cJ,null),t.createElement(i.B,null,"Function description"),t.createElement(u.Z,null,"Complete the function in the editor below.")),"diagonalDifference takes the following parameter:",t.createElement(i.cJ,null),t.createElement(i.GS,{unOrdered:!0,items:[{label:"int arr[n][m]: an array of integers"}]}),t.createElement(i.cJ,null),t.createElement(i.B,null,"Return"),t.createElement(i.GS,{unOrdered:!0,items:[{label:"int: the absolute diagonal difference"}]}),t.createElement(i.cJ,null),t.createElement(i.B,null,"Input Format"),t.createElement(i.cJ,null),"The first line contains a single integer, ",t.createElement(i.BI,null,"n"),", the number of rows and columns in the square matrix ",t.createElement(i.I,null,"arr"),". Each of the next lines describes a row, ",t.createElement(i.I,null,"arr[i]"),", and consists of ",t.createElement(i.I,null,"n")," space-separated integers ",t.createElement(i.I,null,"arr[i][j]"),".",t.createElement(i.cJ,null),t.createElement(i.B,null,"Constraints"),t.createElement(i.GS,{unOrdered:!0,items:[{label:"-100 <= arr[i][j] <= 100"}]}),t.createElement(i.cJ,null),t.createElement(i.B,null,"Output Format"),t.createElement(i.cJ,null),"Return the absolute difference between the sums of the matrix's two diagonals as a single integer.",t.createElement(i.cJ,null),t.createElement(i.cJ,null),t.createElement(u.Z,null,t.createElement(i.B,null,"Sample Input"),t.createElement(i.cJ,null),"3",t.createElement(i.cJ,null),t.createElement(i.cJ,null),"8",t.createElement(i.Ai,null),"2",t.createElement(i.Ai,null),"4",t.createElement(i.cJ,null),"4",t.createElement(i.Ai,null),"5",t.createElement(i.Ai,null),"6",t.createElement(i.cJ,null),"2",t.createElement(i.Ai,null),"8",t.createElement(i.Ai,null),"-12",t.createElement(i.cJ,null),t.createElement(i.cJ,null),t.createElement(i.B,null,"Sample Output"),t.createElement(i.cJ,null),t.createElement(i.B,null,"10"))),t.createElement(u.Z,null,t.createElement(i.IU,null,"Code:"),t.createElement(a.Z,null,"function diagonalDifference(arr) {\n  const arrSize = arr.length;\n  let primaryDiagonalSum = 0;\n  let secondaryDiagonalSum = 0;\n\n  for (let i = 0; i <= arrSize; i++) {\n    const arrItem = arr[i];\n    for (let j = 0; j < arrSize; j++) {\n      if (i === j) {\n        primaryDiagonalSum += arrItem[j];\n      }\n\n      if (j === arrSize - 1 - i) {\n        secondaryDiagonalSum += arrItem[j];\n      }\n    }\n  }\n\n  return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);\n}\n")),t.createElement(u.Z,null,t.createElement(a.Z,null,"const val = diagonalDifference([\n  [8, 2, 4],\n  [4, 5, 6],\n  [2, 8, -12]\n]);\n\nconsole.log(val); // 10\n")))}}}]);