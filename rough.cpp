#include<bits/stdc++.h>
using namespace std;
vector<int>getSmallestArray(vector<int>&arr,int l,int r){
    int n=arr.size();
    vector<int>brr;
    brr.push_back(arr[0]);
    int x=1;
    for(int i=1;i<n;i++){
        int a=arr[i]+x;
        if(a<brr[i-1]){
            brr.push_back(brr[i-1]);
            x=brr[i]-arr[i];
        } 
        else{
            brr.push_back(a);
            x++;
        } 
    }
    vector<int>t={-1};
    for(auto x:brr){
        if(x<l || x>r) return t;
    }
    return brr;
}
int main(){
    vector<int>arr={4,2,3,1};
    int l=1;
    int r=10;
    vector<int>ans=getSmallestArray(arr,l,r);
    for(auto x:ans){
        cout<<x<<" ";
    }
    return 0;
}