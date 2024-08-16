from django.shortcuts import render
from django.views.generic import ListView
class HomeView(ListView):
    template_name = "index.html"
    queryset = []
class BlogView(ListView):
    template_name = "blog.html"
    queryset = []
class ContactUsView(ListView):
    template_name = "contactUs.html"
    queryset = []
class AboutUsView(ListView):
    template_name = "aboutUs.html"
    queryset = []