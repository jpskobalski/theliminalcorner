from django.shortcuts import render, redirect
from .models import Image
from .forms import ImageUploadForm

def index(request):
    images = Image.objects.all()
    return render(request, 'index.html', {'images': images})

def upload(request):
    if request.method == 'POST':
        form = ImageUploadForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('index')
    else:
        form = ImageUploadForm()
    return render(request, 'upload.html', {'form': form})